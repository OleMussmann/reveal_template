#!/usr/bin/env python3

import http.server
import socketserver
import livereload
import sys
from threading import Thread

# Serving presentation on port 8000 (default) or whichever
# port is given as the first command line argument.
if len(sys.argv) > 1:
    PORT = int(sys.argv[1])
else:
    PORT = 8000

LIVERELOAD_PORT = 35729
WATCH_PATH = "."


def main():
    # Create livereload server
    # (Only used for triggering the live reload. It chokes
    # when serving some JavaScript, so we have to
    # do the actual serving with a different server.)
    livereload_server = livereload.Server()
    livereload_server.watch(WATCH_PATH)

    # Create HTTP server
    # (The actual web server.)
    Handler = http.server.SimpleHTTPRequestHandler
    httpd =  socketserver.TCPServer(("localhost", PORT), Handler)
    server_thread = Thread(target=httpd.serve_forever)

    # Serving from a background thread
    server_thread.start()

    print("=====")
    print()
    print(f"Serving presentation at http://localhost:{PORT}")
    print()
    print("Press CTRL+C to stop")
    print()
    print("=====")

    try:
        # Watching for file changes and triggering reload.
        # This now locks the main thread.
        livereload_server.serve(port=LIVERELOAD_PORT)
    except KeyboardInterrupt:
        pass
    finally:
        # Clean up after CTRL+C kills the livereload server
        httpd.shutdown()
        print("=====")
        print()
        print("Stop serving presentation")
        print()
        print("=====")

        server_thread.join()

if __name__ == "__main__":
    main()

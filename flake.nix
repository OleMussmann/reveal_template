{
  description = "live reload";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, home-manager }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
      py = pkgs.python311Packages;
      deps = with pkgs; [
        # system packages
        #bash

        # python packages
        py.livereload
      ];
    in {
      devShells.default = pkgs.mkShell rec {
        packages = deps;
      };
    });
}

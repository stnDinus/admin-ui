{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs =
    { self, nixpkgs }:
    let
      platform = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages."${platform}";
    in
    {
      devShells."${platform}".default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs
          cypress
        ];
      };
    };
}

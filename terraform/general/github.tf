resource "tls_private_key" "deploy_data-visualization-components" {
  algorithm = "RSA"
  rsa_bits  = 2048
}

resource "github_repository_deploy_key" "circleci" {
  repository = local.project
  title      = "CircleCI Deploy"
  read_only  = false
  key        = tls_private_key.deploy_data-visualization-components.public_key_openssh
}

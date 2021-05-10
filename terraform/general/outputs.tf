output "deploy_loadsmart_data_visualization_fingerprint" {
  value = tls_private_key.deploy_loadsmart_data_visualization.public_key_fingerprint_md5
}

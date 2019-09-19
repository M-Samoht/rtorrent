console.log(`
min_peers = ${process.env.MIN_PEER || "1"}
max_peers = ${process.env.MAX_PEER || "100"}
min_peers_seed = ${process.env.MIN_PEER_SEED || "1"}
max_peers_seed = ${process.env.MAX_PEER_SEED || "100"}
max_uploads = ${process.env.MAX_UPLOAD || "10"}
max_downloads_global = ${process.env.MAX_DOWNLOAD || "10"}
download_rate = ${process.env.DOWNLOAD_RATE || "0"}
upload_rate = ${process.env.UPLOAD_RATE || "0"}
directory = ${process.env.DIRECTORY || "/data"}
dht = ${process.env.DHT || "off"}
scgi_port = 0.0.0.0:${process.env.SCGI_PORT || "5000"}
`);
# aolccbc.com

This is the source code for aolccbc.com

All internal code is Copyright Academy of Learning

Libraries used Copyright their rights holders

## Contributing

To contribute changes, please create a branch and pull request with your changes.

## Running

This code includes the docker container with Apache2 and PHP that is required for serving the site.

To test or run on a new server
- Install Docker + Docker Compose
```
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker $USER
sudo apt-get install libffi-dev libssl-dev
sudo apt-get install -y python python-pip
sudo apt-get remove python-configparser
sudo pip install docker-compose
```

- Clone the project by running `git clone https://github.com/fireball8931/aolccbc.com`
- CD into aolccbc.com
- Run docker-compose up -d

A reverse proxy is still required to serve over SSL

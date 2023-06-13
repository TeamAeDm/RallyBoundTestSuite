#!/bin/sh

if [ "$(uname -m)" = "x86_64" ]; then
  export CHROME_IMAGE=selenium/node-chrome:latest
  export FIREFOX_IMAGE=selenium/node-firefox:latest
  export HUB_IMAGE=selenium/hub:latest
else
  export CHROME_IMAGE=seleniarm/node-chromium:latest
  export FIREFOX_IMAGE=seleniarm/node-firefox:latest
  export HUB_IMAGE=seleniarm/hub:latest
fi

docker-compose up -d
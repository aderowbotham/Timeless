# Requires https://github.com/jmlewis/collate
# npm install collate

collate -t ../deploy/timeless-min.js -d js_src/ segment-data.js build-clock.js effects.js display-unit.js display-controller.js init.js -c -w -v

find . -name "node_modules" -type d -exec rm -rf '{}' +

clear && npx eslint --flag unstable_ts_config --print-config packages/alert/src/alert.tsx > output

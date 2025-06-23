#!/bin/bash

TABLE_NAME="url-shortener"
REGION="us-east-1"
LOCALSTACK_ENDPOINT="http://localhost:4566"

awslocal dynamodb create-table \
  --table-name "$TABLE_NAME" \
  --attribute-definitions '[{"AttributeName":"key","AttributeType":"S"}]' \
  --key-schema '[{"AttributeName":"key","KeyType":"HASH"}]' \
  --provisioned-throughput '{"ReadCapacityUnits":1,"WriteCapacityUnits":1}' \
  --endpoint-url "$LOCALSTACK_ENDPOINT" && \
  echo "DynamoDB table '$TABLE_NAME' created successfully." || {
    echo "Failed to create DynamoDB table '$TABLE_NAME'."
    exit 1
  }

# Verify
if awslocal dynamodb list-tables --endpoint-url "$LOCALSTACK_ENDPOINT" | grep -q "$TABLE_NAME"; then
    echo "DynamoDB table '$TABLE_NAME' exists."
else
    echo "DynamoDB table '$TABLE_NAME' does not exist."
    exit 1
fi

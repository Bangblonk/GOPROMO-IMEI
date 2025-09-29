#!/bin/bash

# GOPROMO-IMEI Vercel Deployment Script
# This script helps deploy the project to Vercel

echo "🚀 Starting GOPROMO-IMEI Vercel Deployment..."
echo "=================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed!"
    echo "Please install it first:"
    echo "npm i -g vercel"
    exit 1
fi

# Check if user is logged in to Vercel
echo "🔍 Checking Vercel authentication..."
if ! vercel whoami &> /dev/null; then
    echo "❌ Not logged in to Vercel!"
    echo "Please login first:"
    echo "vercel login"
    exit 1
fi

echo "✅ Vercel authentication verified"

# Run build to ensure everything works
echo "🔨 Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the errors before deploying."
    exit 1
fi
echo "✅ Build successful"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
echo "Choose deployment option:"
echo "1. Preview deployment (staging)"
echo "2. Production deployment"
read -p "Enter your choice (1 or 2): " choice

case $choice in
    1)
        echo "📦 Deploying to preview..."
        vercel
        ;;
    2)
        echo "🚀 Deploying to production..."
        vercel --prod
        ;;
    *)
        echo "❌ Invalid choice! Please run the script again."
        exit 1
        ;;
esac

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🎉 Your GOPROMO-IMEI website is now live!"
else
    echo "❌ Deployment failed!"
    echo "Please check the error messages above and try again."
    exit 1
fi
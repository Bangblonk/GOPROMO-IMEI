#!/bin/bash

# GOPROMO-IMEI Deployment Script
# This script helps deploy the application to various cloud platforms

echo "🚀 Starting GOPROMO-IMEI Deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the application
echo "🏗️  Building application..."
npm run build

# Check if build was successful
if [ ! -d ".next" ]; then
    echo "❌ Error: Build failed. .next directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Build output available in .next directory"

# Platform-specific deployment instructions
echo ""
echo "🌐 Choose your deployment platform:"
echo ""
echo "1. AWS Amplify (Recommended for Next.js)"
echo "   - Push to GitHub first"
echo "   - Connect AWS Amplify to your GitHub repo"
echo "   - Configure build settings"
echo ""
echo "2. AWS Elastic Beanstalk"
echo "   - Install: pip install awsebcli"
echo "   - Initialize: eb init"
echo "   - Deploy: eb create production"
echo ""
echo "3. AWS EC2 with Docker"
echo "   - Dockerfile and docker-compose.yml are ready"
echo "   - Deploy to EC2 instance"
echo ""
echo "4. Vercel (Alternative)"
echo "   - Install: npm i -g vercel"
echo "   - Deploy: vercel"
echo ""

# Create deployment checklist
echo "📋 Deployment Checklist:"
echo "✅ Dependencies installed"
echo "✅ Code linted"
echo "✅ Application built"
echo "⏳ GitHub repository setup needed"
echo "⏳ Cloud platform configuration needed"
echo "⏳ Environment variables setup needed"
echo ""

echo "🎯 Next steps:"
echo "1. Setup GitHub authentication and push code"
echo "2. Choose your preferred cloud platform"
echo "3. Configure environment variables (if needed)"
echo "4. Deploy and test the application"
# GOPROMO-IMEI Deployment Guide

This guide will help you deploy the GOPROMO-IMEI application to various cloud platforms.

## Prerequisites

1. **GitHub Repository**: Your code must be pushed to GitHub
2. **AWS Account**: For AWS-based deployments
3. **Domain Name**: (Optional) Custom domain for your application

## Step 1: Push to GitHub

### Method A: Using HTTPS with Personal Access Token
1. Create a Personal Access Token on GitHub:
   - Go to Settings > Developer settings > Personal access tokens
   - Click "Generate new token"
   - Select `repo` scope
   - Copy the token

2. Push your code:
```bash
git add .
git commit -m "Ready for deployment"
git push -u origin main
# When prompted, use your GitHub username and the token as password
```

### Method B: Using SSH Keys
1. Generate SSH key:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

2. Start SSH agent and add key:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

3. Copy public key to GitHub:
```bash
cat ~/.ssh/id_ed25519.pub
# Copy the output and add it to GitHub SSH keys
```

4. Update remote URL and push:
```bash
git remote set-url origin git@github.com:Bangblonk/GOPROMO-IMEI.git
git push -u origin main
```

## Step 2: Choose Your Deployment Platform

### Option 1: AWS Amplify (Recommended)

#### Why AWS Amplify?
- Built specifically for modern web apps
- Automatic CI/CD from GitHub
- Free tier available
- Easy custom domain setup
- Automatic SSL certificates

#### Deployment Steps:
1. **Log in to AWS Console** and navigate to Amplify
2. **Connect to GitHub**:
   - Click "New app" > "Host web app"
   - Select "GitHub" as the repository service
   - Authorize AWS to access your GitHub account
   - Select the `GOPROMO-IMEI` repository
   - Select the `main` branch

3. **Configure Build Settings**:
   - Amplify will automatically detect Next.js
   - Build settings are already configured in `amplify.yml`
   - Review and save

4. **Environment Variables** (Optional):
   - Add any required environment variables
   - Example: `NODE_ENV=production`

5. **Deploy**:
   - Click "Save and deploy"
   - Amplify will automatically build and deploy your app
   - Wait for deployment to complete (usually 2-5 minutes)

6. **Custom Domain** (Optional):
   - Go to "Domain management"
   - Connect your custom domain
   - Amplify will automatically handle SSL certificates

### Option 2: AWS Elastic Beanstalk

#### Why Elastic Beanstalk?
- More control over the environment
- Supports multiple environments (dev, staging, prod)
- Scalable and reliable
- Cost-effective for larger applications

#### Deployment Steps:
1. **Install EB CLI**:
```bash
pip install awsebcli
```

2. **Initialize EB**:
```bash
eb init
```
- Select AWS region
- Select application name
- Select platform: "Node.js"
- Select "Yes" to set up SSH for your instances

3. **Create Environment**:
```bash
eb create production
```

4. **Deploy**:
```bash
eb deploy
```

5. **Open Application**:
```bash
eb open
```

### Option 3: AWS EC2 with Docker

#### Why EC2 with Docker?
- Full control over the infrastructure
- Can handle high traffic
- Customizable to your needs
- Cost-effective at scale

#### Deployment Steps:
1. **Launch EC2 Instance**:
   - Go to AWS EC2 Console
   - Launch new instance (Ubuntu recommended)
   - Configure security groups (ports 22, 80, 443)
   - Launch and connect via SSH

2. **Install Docker**:
```bash
sudo apt update
sudo apt install docker.io docker-compose
sudo systemctl start docker
sudo systemctl enable docker
```

3. **Deploy Application**:
```bash
# Clone your repository
git clone https://github.com/Bangblonk/GOPROMO-IMEI.git
cd GOPROMO-IMEI

# Build and run with Docker Compose
sudo docker-compose up -d
```

4. **Setup Nginx** (Optional):
```bash
# Install Nginx
sudo apt install nginx

# Configure Nginx reverse proxy
sudo cp nginx.conf /etc/nginx/nginx.conf
sudo systemctl restart nginx
```

### Option 4: Vercel (Alternative)

#### Why Vercel?
- Optimized for Next.js applications
- Automatic deployments from GitHub
- Global CDN
- Free tier available

#### Deployment Steps:
1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Configure Project**:
   - Follow the prompts
   - Connect to GitHub repository
   - Configure environment variables

4. **Deploy to Production**:
```bash
vercel --prod
```

## Step 3: Post-Deployment Configuration

### Environment Variables
Copy the values from `.env.example` to your deployment platform's environment variables configuration.

### Domain Configuration
1. **DNS Settings**:
   - Point your domain to the deployment platform
   - For AWS Amplify: Use CNAME record
   - For EC2: Use A record with elastic IP

2. **SSL Certificates**:
   - Most platforms handle this automatically
   - For manual setup: Use Let's Encrypt or AWS Certificate Manager

### Monitoring and Logging
1. **AWS CloudWatch** (for AWS deployments):
   - Set up alarms for error rates
   - Monitor application performance

2. **Application Logging**:
   - Check platform-specific logging
   - Set up log aggregation if needed

## Step 4: Testing

### Post-Deployment Checklist
- [ ] Application loads correctly
- [ ] All pages are accessible
- [ ] Forms work properly
- [ ] WhatsApp integration functions
- [ ] Mobile responsiveness
- [ ] SSL certificate is valid
- [ ] Performance is acceptable

### Load Testing (Optional)
```bash
# Install Apache Bench
sudo apt install apache2-utils

# Run load test
ab -n 1000 -c 100 https://your-domain.com/
```

## Troubleshooting

### Common Issues

#### 1. Build Failures
- Check build logs in deployment platform
- Ensure all dependencies are properly installed
- Verify Node.js version compatibility

#### 2. Runtime Errors
- Check application logs
- Verify environment variables
- Test database connections

#### 3. Performance Issues
- Enable caching
- Optimize images and assets
- Consider using CDN

#### 4. Domain/SSL Issues
- Verify DNS propagation
- Check SSL certificate configuration
- Ensure proper redirect setup

## Support

If you encounter any issues during deployment:
1. Check the deployment platform's documentation
2. Review build and runtime logs
3. Test locally with production settings
4. Contact platform support if needed

## Cost Optimization

### AWS Free Tier
- Amplify: 1000 build minutes/month
- EC2: 750 hours/month of t2.micro
- S3: 5GB storage

### Recommendations
1. Start with free tier options
2. Monitor usage and costs
3. Scale up as needed
4. Consider reserved instances for long-term use

---

Happy deploying! 🚀
# 🌐 Portfolio Website Deployment on AWS using CodeBuild (CI/CD with GitHub)

This project demonstrates how I deployed my personal **Portfolio Website** on **AWS S3** with an automated **CI/CD pipeline** using **GitHub and CodeBuild** (without CodePipeline).

---

## 🚀 Project Overview
- **Source Code**: GitHub Repository (HTML, CSS, JS files for portfolio)
- **Build & Deploy**: AWS CodeBuild (directly uploads to S3)
- **Hosting**: Amazon S3 (Static Website Hosting enabled)
- **Automation**: Any push to GitHub → triggers CodeBuild → updates website automatically

---

## 🛠️ Services Used
- **Amazon S3** → Hosting static website  
- **AWS CodeBuild** → Build & deploy artifacts directly to S3  
- **GitHub** → Source code repository  

---

## 🔑 Steps Performed
1. **Created S3 Bucket**
   - Enabled static website hosting  
   - Added bucket policy for public access  

2. **Configured CodeBuild Project**
   - Connected to GitHub repository (branch: `main`)  
   - Ubuntu runtime used  
   - Added `buildspec.yml` to copy files to S3  
   - Disabled KMS encryption for artifacts  

3. **Automated Deployment**
   - Whenever code is pushed to GitHub → CodeBuild automatically runs → deploys files to S3  
   - No manual upload required  

4. **Tested Website**
   - Verified public URL is working  
   - Every GitHub change reflects instantly on the website  

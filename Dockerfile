FROM node:20-alpine AS lepton_ui
WORKDIR /app
COPY web/package*.json ./web/
RUN cd web 
RUN npm install  
RUN npm run build

FROM python:3.11.10-bullseye AS backend
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

# Set environment variables
ENV BING_SEARCH_V7_SUBSCRIPTION_KEY=$BING_SEARCH_V7_SUBSCRIPTION_KEY
ENV GOOGLE_SEARCH_API_KEY=$GOOGLE_SEARCH_API_KEY
ENV LEPTON_WORKSPACE_TOKEN=$LEPTON_WORKSPACE_TOKEN
ENV LEPTON_WORKSPACE_ID=$LEPTON_WORKSPACE_ID
ENV BACKEND=$BACKEND
ENV PORT=$PORT

EXPOSE $PORT

CMD ["python", "search_with_lepton.py"]





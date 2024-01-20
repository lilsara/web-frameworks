from flask import Flask, render_template, request
from google.oauth2 import service_account
from googleapiclient.discovery import build

app = Flask(__name__)

# Replace 'YOUR_API_KEY' with the API key obtained from the Google Cloud Console
API_KEY = 'PMAK-65a59372aebc82003faa2b84-9a7d20aa68143e83808a3e506733bcf57a'
YOUTUBE_API_SERVICE_NAME = 'youtube'
YOUTUBE_API_VERSION = 'v3'

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        search_criteria = request.form.get('search_criteria')
        max_results = int(request.form.get('max_results', 10))

        videos = search_videos(search_criteria, max_results)
        return render_template('index.html', videos=videos)

    return render_template('index.html', videos=[])

def search_videos(query, max_results):
    credentials = service_account.Credentials.from_service_account_file(
        'path/to/your/credentials.json',  # Replace with the path to your service account JSON file
        scopes=['https://www.googleapis.com/auth/youtube.force-ssl']
    )

    youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION, credentials=credentials)

    request = youtube.search().list(
        q=query,
        part='snippet',
        maxResults=max_results
    )

    response = request.execute()

    videos = []
    for item in response['items']:
        title = item['snippet']['title']
        description = item['snippet']['description']
        thumbnail_url = item['snippet']['thumbnails']['default']['url']
        videos.append({'title': title, 'description': description, 'thumbnail_url': thumbnail_url})

    return videos

if __name__ == '__main__':
    app.run(debug=True)

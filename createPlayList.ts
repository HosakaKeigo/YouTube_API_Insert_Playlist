import { google } from 'googleapis';
import path from 'path';
import { authenticate } from '@google-cloud/local-auth';

// initialize the Youtube API library
const youtube = google.youtube('v3');
async function main() {
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, 'secrets/oauth2.keys.json'),
    scopes: ['https://www.googleapis.com/auth/youtube'],
  });
  google.options({ auth });

  const titles: string[] = ['2023特級一次A 1グループ']

  titles.forEach(title => {
    createPlaylist(title).then(res =>
      console.log(`${res.data.snippet?.title},id:${res.data.id}`)
    )
  }
  )

  console.log("success!")
}

async function createPlaylist(title: string) {
  const res = await youtube.playlists.insert({
    'part': ["snippet", "status"],
    'requestBody': {
      "snippet": {
        title: title
      },
      "status": {
        privacyStatus: "unlisted"
      },
    }
  }
  );
  return res
}

main()
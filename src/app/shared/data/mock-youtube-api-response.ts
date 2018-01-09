
export const reponse = {
    nextPageToken: 'CHSDLJ',
    items:[
        {
            statistics:{
                viewCount: 1000,
                likeCount: 50
            },
            snippet:{
                publishedAt: Date.now(),
                title:'TT',
                thumbnails:{
                    high:{
                        url: 'http://url'
                    }, 
                    medium:{
                        url: 'http://url'
                    }
                }
            }
        }
    ]
}



export const reponseWithoutSnippet = {
    nextPageToken: 'CHSDLJ',
    items:[
        {
            
        }
    ]
}

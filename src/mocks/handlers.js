// src/mocks/handlers.js
import { rest } from 'msw'
export const handlers = [
    rest.get('/movie-ratings-data', (req, res, ctx) => {
        return res(
            ctx.json({
                "data": [
                    {
                        "movie_title": "The Hunger Games",
                        "genre": "Action",
                        "rating": "9/10",
                        "notes": "This title was a superb recreation of the original Hunger Games book on the big screen. I do wish that they'd put more emphasis on the relationship between Katniss and Prim, however.",
                        "director": "Francis Lawrence",
                        "year_created": "2012"
                    },
                    {
                        "movie_title": "The Hunger Games: Catching Fire",
                        "genre": "Action/Adventure",
                        "rating": "9/10",
                        "notes": "This title was a superb recreation of the Hunger Games: Catching Fire book on the big screen. No real complaints here.",
                        "director": "Francis Lawrence",
                        "year_created": "2013"
                    },
                    {
                        "movie_title": "The Hunger Games: Mockingjay (Part 1)",
                        "genre": "Action/Adventure",
                        "rating": "7/10",
                        "notes": "The film does a good job of expanding on the lore of the Hunger Games universe, but I do not think the additional content justifies the padding out into two movies. Not as bad as the Hobbit trilogy in terms of padding, however.",
                        "director": "Francis Lawrence",
                        "year_created": "2014"
                    },
                    {
                        "movie_title": "The Hunger Games: Mockingjay (Part 2)",
                        "genre": "Action",
                        "rating": "7/10",
                        "notes": "The film, as mentioned before, should have been one film instead of a two-parter. For what it is, it does a fine job recreating the end of the Mockingjay book, but the filler felt like padding through and through.",
                        "director": "Francis Lawrence",
                        "year_created": "2015"
                    },
                    {
                        "movie_title": "The Dark Knight",
                        "genre": "Action",
                        "rating": "10/10",
                        "notes": "Everyone remembers this movie for Heath Ledger's performance as the Joker. While he is and probably will remain the best Joker on the big screen, Harvey Dent's performance was also memorable and well-casted.",
                        "director": "Christopher Nolan",
                        "year_created": "2008"
                    },
                    {
                        "movie_title": "The Dark Knight Rises",
                        "genre": "Action",
                        "rating": "8/10",
                        "notes": "This movie had HUGE shoes to fill after The Dark Knight, but it tried to be its own thing and succeeded. Bane was also a well-done and well-casted Batman villain.",
                        "director": "Christopher Nolan",
                        "year_created": "2012"
                    },
                    {
                        "movie_title": "Who Framed Roger Rabbit",
                        "genre": "Comedy",
                        "rating": "9/10",
                        "notes": "The work done to make the \"real\" characters interact with the cartoons seamlessly is still impressive to this day. The main plot could've been a bit more fleshed out and Judge Doom not be such an obvious villain, but overall the movie was great.",
                        "director": "Robert Zemeckis",
                        "year_created": "1988"
                    },
                    {
                        "movie_title": "50 First Dates",
                        "genre": "Comedy",
                        "rating": "7/10",
                        "notes": "Drew Barrymore does a great job in her performance here. Rob Schneider brings this movie's rating down, as he does in any movie he's in. One of Adam Sandler's best performances.",
                        "director": "Steven Sagal",
                        "year_created": "2004"
                    }
                ]
            })
        )
    })
]
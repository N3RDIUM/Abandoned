from flask import Flask, request, jsonify
import csv

app = Flask(__name__)
with open('movies.csv', encoding = "utf-8") as f:
    reader = csv.reader(f)
    data = list(reader)
    movies = data[1:]

liked_movies = []
unliked_movies = []
didnt_watch = []

@app.route('/')
def index():
    return jsonify({
        "status": "success",
        "data": movies
    })

@app.route('/liked')
def liked_movie():
    movie_id = int(request.args.get('id'))
    liked_movies.append(movies[movie_id])
    print(liked_movies)

    # remove from unliked
    if movie_id in unliked_movies:
        unliked_movies.pop(movie_id)

    return jsonify({
        "status": "success",
        "added": movies[movie_id]
    })

@app.route('/unliked')
def unliked_movie():
    movie_id = int(request.args.get('id'))
    unliked_movies.append(movies[movie_id])
    print(unliked_movies)

    # remove from liked
    if movie_id in liked_movies:
        liked_movies.pop(movie_id)
        
    return jsonify({
        "status": "success",
        "added": movies[movie_id]
    })

@app.route('/didnt_watch')
def didnt_watch_movie():
    movie_id = int(request.args.get('id'))
    didnt_watch.append(movies[movie_id])
    print(didnt_watch)

    if movie_id in liked_movies:
        liked_movies.pop(movie_id)
    if movie_id in unliked_movies:
        unliked_movies.pop(movie_id)

    return jsonify({
        "status": "success",
        "added": movies[movie_id]
    })

if __name__ == '__main__':
    app.run(debug=True)

class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this.counter = 0;
    }

    get likes() {// not shure fore return messages!!!
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;

        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;

        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same article twice!");
        }

        if (username === this.creator) {
            throw new Error("You can't like your own articles!");
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this article!");
        }

        let userToRemove = this._likes.find((x) => x === username);

        this._likes.pop(userToRemove);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let commentObj = {}

        if (id === undefined || id > this._comments.length) {
            this.counter++;
            commentObj.username = username;
            commentObj.content = content;
            commentObj.id = this.counter;
            commentObj.reply = [];

            this._comments.push(commentObj);

            return `${username} commented on ${this.title}`;

        } else if (typeof (id) === "number") {
            let objToAddR = this._comments.find((c) => c.id === id);

            if (objToAddR) {
                let i = 0;

                if (objToAddR.reply.length === 0) {
                    i = objToAddR.id + 0.1;
                } else {
                    i = objToAddR.id + ((objToAddR.reply.length +1) / 10);
                }

                let replyC = {
                    username: username,
                    content: content,
                    id: i
                }

                objToAddR.reply.push(replyC);
            }

            return 'You replied successfully';
        }
    }

    toString(sortingType) {
        let str = '';
        str += `Title: ${this.title}\n`;
        str += `Creator: ${this.creator}\n`;
        str += `Likes: ${this._likes.length}\n`;
        str += `Comments:\n`;

        if (sortingType === 'asc') {
            for (const com of this._comments.sort((a, c) => a.id - c.id)) {
                str += `-- ${com.id}. ${com.username}: ${com.content}\n`;

                for (const rep of com.reply.sort((a, c) => a.id - c.id)) {
                    str += `---${rep.id}. ${rep.username}: ${rep.content}\n`;

                }
            }

        } else if (sortingType === 'desc') {
            for (const com of this._comments.sort((a, c) => c.id - a.id)) {
                str += `-- ${com.id}. ${com.username}: ${com.content}\n`;

                for (const rep of com.reply.sort((a, c) => c.id - a.id)) {
                    str += `--- ${rep.id}. ${rep.username}: ${rep.content}\n`;
                }
            }

        }
        else if (sortingType === 'username') {
            for (const com of this._comments.sort((a, c) => a.username.localeCompare(c.username))) {
                str += `-- ${com.id}. ${com.username}: ${com.content}\n`;

                for (const rep of com.reply.sort((a, c) => a.username.localeCompare(c.username))) {
                    str += `--- ${rep.id}. ${rep.username}: ${rep.content}\n`;
                }
            }

        }

        return str.trim();
    }

}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
var Users = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    isAdmin: {
        type: Boolean
    },
    id: {
        type: Schema.Types.ObjectId
    },
    profilePic: {
        type: String
    },
    bio: {
        type: String
    }
});
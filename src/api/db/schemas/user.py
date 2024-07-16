def user_schema(user) -> dict:
	return {
			"id": str(user["_id"]),
			"username": user["username"],
            "password": user["password"],
			"email": user["email"],
            "tipo": user["tipo"],
            "desabled": user["desabled"],
			}

def users_schema(users) -> list:
    return [user_schema(user) for user in users]
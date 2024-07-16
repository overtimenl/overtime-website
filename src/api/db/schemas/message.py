def message_schema(message) -> dict:
	return {
		"id": str(message["_id"]),
		"work": message["work"],
        "name": message["name"],
		"conteudo": message["conteudo"],
        "data": message["data"],
        "more": message["more"],
	}

def messages_schema(messages) -> list:
    return [message_schema(message) for message in messages]
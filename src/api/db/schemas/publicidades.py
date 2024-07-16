def publicidade_schema(publicidade) -> dict:
	return {
		"id": str(publicidade["_id"]),
		"title": publicidade["title"],
        "subtitle": publicidade["subtitle"],
		"descricao": publicidade["descricao"],
        "image": publicidade["image"],
        "more": publicidade["more"],
	}

def publicidades_schema(publicidades) -> list:
    return [publicidade_schema(publicidade) for publicidade in publicidades]
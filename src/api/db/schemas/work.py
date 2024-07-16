def work_schema(work) -> dict:
	return {
		"id": str(work["_id"]),
		"work": work["work"],
        "name": work["name"],
		"conteudo": work["conteudo"],
        "image": work["image"],
        "more": work["more"],
        "whats": work["whats"],
	}

def works_schema(works) -> list:
    return [work_schema(work) for work in works]
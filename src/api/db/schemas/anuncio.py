def anuncio_schema(anuncio) -> dict:
	return {
			"id": str(anuncio["_id"]),
			"name": anuncio["name"],
            "servico": anuncio["servico"],
			"meio": anuncio["meio"],
            "vcampanha": float(anuncio["vcampanha"]),
            "conversao": int(anuncio["conversao"]),
            "duracao": int(anuncio["duracao"]),
            "dataFim": anuncio["dataFim"],
	}

def anuncios_schema(anuncios) -> list:
    return [anuncio_schema(anuncio) for anuncio in anuncios]
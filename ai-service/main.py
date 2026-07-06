from fastapi import FastAPI 

app= FastAPI(title="PerfilLaboralIA AI Service")

@app.get("/health")
def health():
    return {"status": "ok"}
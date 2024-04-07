document.getElementById('botao').addEventListener('click', async ()=>{
    const url = "https://api.adviceslip.com/advice"
    const respostFetch = await fetch(url)
    const json = await respostFetch.json();
    const id = json.slip.id
    const text = json.slip.advice
    
    document.getElementById('titulo').innerHTML = `# ${id}`;
    document.getElementById('text').innerHTML = `"${text}"`
})

function verificarSenha() {
  const senha = document.getElementById('senha').value;
  if (senha === 'parauapebas123') {
    document.getElementById('login').style.display = 'none';
    document.getElementById('admin-form').style.display = 'block';
  } else {
    alert('Senha incorreta!');
  }
}

document.getElementById('form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const noticia = {
    titulo: document.getElementById('titulo').value,
    imagem: document.getElementById('imagem').value,
    resumo: document.getElementById('resumo').value,
    conteudo: document.getElementById('conteudo').value
  };
  const res = await fetch('noticias.json');
  const noticias = await res.json();
  noticias.push(noticia);
  const blob = new Blob([JSON.stringify(noticias, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'noticias.json';
  a.click();
});
    
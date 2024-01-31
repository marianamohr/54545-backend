// salvar um usuario no ./data/usuarios.json com a criptografia
// { usuario: "mariana@teste.com", senha: "xablau123" }
// ao receber um usuario com nome e senha, deve validar se a senha enviada, confere com a senha do "DB"ß

const fs = require("fs");
const crypto = require("crypto");

const lerArquivo = async () => {
  try {
    let resultado = await fs.promises.readFile("./data/usuarios.json", "utf-8");
    const resultadoParsed = await JSON.parse(resultado);
    return resultadoParsed;
  } catch (error) {
    console.log("Error", error);
  }
};

const gravarDados = (dados) => {
  try {
    const dataToSave = JSON.stringify(dados);
    fs.promises.writeFile("./data/usuarios.json", dataToSave);
  } catch (error) {
    console.log("Error", error);
  }
};

const salvaUsuario = async (usuario) => {
  try {
    const listaUsuarios = await lerArquivo();
    console.log(usuario.senha);
    usuario.senha = crypto
      .createHash("sha256")
      .update(usuario.senha)
      .digest("hex");
    console.log(usuario.senha);
    listaUsuarios.push(usuario);
    await gravarDados(listaUsuarios);
  } catch (error) {}
};

const validarUsuario = async (usuario) => {
  const listaUsuarios = await lerArquivo();
  const senhaCriptografada = crypto
    .createHash("sha256")
    .update(usuario.senha)
    .digest("hex");
  const usuarioEncontrado = listaUsuarios.find(
    (user) => user.usuario === usuario.usuario && user.senha === senhaCriptografada
  );
  if (usuarioEncontrado) {
    console.log("Usuario Logado");
  } else {
    console.log("Usuario nao logado");
  }
  return usuarioEncontrado;
};

const main = async () => {
  //const resultado = await lerArquivo();
  //console.log("1", resultado);
  //await salvaUsuario({ usuario: "gui@teste.com", senha: "batatinha" });
  // const resultado2 = await lerArquivo();
  //console.log("2", resultado2);
  await validarUsuario({ usuario: "gui@teste.com", senha: "batatinha123" });
};

main();

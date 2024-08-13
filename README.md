PROJETO CRUD RESTFUL COM FRONTEND E BACKEND (COM SWAGGER E PAGINAÇÃO)

AUTHOR: AURICELIO FREITAS

DATA: 13/08/2024

-----------------------------------------------------------

O projeto será implementado conforme abaixo: 


BACKEND

- DEPENDÊNCIAS 
    
    
      IDE: Spring Tool Suite 4 (STS)

      Banco de Dados: H2

      Gerenciador de Dependências: Maven

      Linguagem: Java

      Versionamento: Git e GitHub

      Testes da API: Postman

      Documentação: Swagger OpenApi



- CASO

    Uma Universidade precisa cadastrar seus alunos, conforme segue:
  
      NOME
  
      CPF
  
      DATA DE NASCIMENTO
  
      RENDA 


- TESTES A SEREM REALIZADOS NO POSTMAN

    BUSCA PAGINADA DE ALUNOS
    
      GET /students?page=0&sort=name,asc
    
    BUSCA DE ALUNO POR ID
    
      GET /students/1
    
    INSERIR NOVO ALUNO
    
      POST /students
      {
        "name": "Auricelio Freitas",
        "cpf": "12345678901",
        "birthDate": "1982-08-28T10:30:00Z",
        "income": 15089.0,
      }
  
    ATUALIZAR ALUNO
    
      PUT /students/1
      {
        "name": "Auricelio Moreira",
        "cpf": "12345678901",
        "birthDate": "1982-08-28T10:30:00Z",
        "income": 15089.0,
      }
  
    DELETAR ALUNO
    
       DELETE /clients/1


- SWAGGER OPENAPI

  Link de acesso ao Swagger: http://localhost:8080/swagger-ui/index.html#

    ![image](https://github.com/auriceliof/unifametro-afdpw-CRUD/assets/4201131/212eb08a-9600-4aa7-81e2-1c2d796a9ea7)

  
-----------------------------------------------------------
FRONTEND

- DEPENDÊNCIAS 

    O projeto será implementado conforme abaixo: 
    
      IDE: Visual Studio Code (v. 1.88.1)
      
      Gerenciador de Dependências: Node (v. 18.19) / Yarn (v. 1.22.21)

      Linguagem: JavaScript/TypeScript

      Versionamento: Git e GitHub

      Projeto: VITE



- CASO

    O Administrador do Sistema deve visualizar todos os alunos na tela e conseguir realizar as ações de CRUD.

  
  
- TESTES A SEREM REALIZADOS NO SISTEMA WEB

      Visualizar todos os alunos numa tabela 
        
      Inserir um novo aluno
    
      Editar um aluno existente
    
      Deletar um aluno existente

OBS: Não será possível submeter um formulário vazio, bem como todos os campos devem ser preenchidos conforme regras de validação.

  
-----------------------------------------------------------
- INTERFACES

  HOME

![image](https://github.com/user-attachments/assets/2bba479c-86d7-49df-94aa-fce8c8220500)




  CATÁLOGO DE ALUNOS

![image](https://github.com/user-attachments/assets/73501ef8-a3f1-44f9-90c1-e48116cd6b15)




  CADASTRO E EDIÇÃO DE ALUNO

![image](https://github.com/user-attachments/assets/097c1a7c-3373-480f-a4a6-cd5f0eeb34ca)




MODAL PARA CONFIRMAÇÃO DE EXCLUSÃO DE ALUNO

![image](https://github.com/user-attachments/assets/43cdd911-14e7-446a-b4f2-4c4180511de4)




VALIDAÇÃO DE FORMULÁRIO

![image](https://github.com/user-attachments/assets/00d8cda0-d39d-4644-baa2-16a00856891d)




PAGINAÇÃO

![image](https://github.com/user-attachments/assets/94622803-0497-4cdf-b73f-1cb9c086f93b) 

# React JS Crash Course for Beginners

### Application running

[https://linkedin-clone-f6942.web.app/](https://linkedin-clone-f6942.web.app/)

### Start application

Clone the project, download dependencies and start application 

```bash
# go to your workspace folder
$ git clone https://github.com/alysonfs/linkedin-clone.git
# go to linkedin-clone folder
$ cd linkedin-clone
# download dependencies
$ yarn
# start application
$ yarn start
```

### To build

```bash
# just execute
$ yarn build
```

- React JS
    
    Developed with minimal organization of the pages and components.
    
    Used
    
    - Redux
        
        ```bash
        npx create-react-app --template redux
        ```
        
        Criado o Store e Splice para usuário;
        
        Criado um selector "selectUser" ;
        
        Quando criado um novo usuário ou feito o login é enviado via Dispatch o usuário para o contexto do Redux.
        
    - Style
        
        CSS with Display Flex
        
        - Material UI
            
            Material UI [https://mui.com/pt/getting-started/installation/](https://mui.com/pt/getting-started/installation/)
            
            Icons [https://mui.com/pt/components/material-icons/](https://mui.com/pt/components/material-icons/)
            
            Others Icons [https://icons8.com.br/](https://icons8.com.br/)
            
        
- Firebase 9
    
    I created a project without permissions rule for public access to data base, there was allow a simple authentication with email and password, there also I was build the implementation code to my app integration.
    
    Used
    
    - Auth
        
        Adicionando usuário com email e senha no auth do firebase;
        
        Fazendo login usando email e senha com o auth do firebase;
        
    - Firestore
        
        Foi criado uma collection "posts” com documentos oriundos do input do formulário do feed;
        
        Recuperando documentos da collection "posts";
        
    
    I finished application to deploy in firebase, was used login, init and deploy commands.
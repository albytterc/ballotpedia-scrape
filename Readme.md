# NativeBase TypeScript Expo Template

The official NativeBase TypeScript template for [Expo](https://docs.expo.io/)

## Dependencies

Download dependencies:  

``` npm install yarn```   

``` npm install --global expo-cli```  

``` yarn add native-base ```

``` expo install react-native-svg@12.1.1 ```   

``` expo install react-native-safe-area-context@3.3.2 ```
## Usage

```sh
expo init my-app --template @native-base/expo-template-typescript
```
## Updating Code Using Git

1. Before writing your code:
    - Pull from remote staging to local staging

    ``` git checkout staging ```
    
    ``` git pull ```
    
      - Make a new branch for the feature you’re going to add

    ``` git checkout -b <feature_name>-<your_name> ```
2. Write your code:
3. After writing your code:
  - Add, commit, push
  
    ``` git add . ```
    
    ``` git commit -m "your message. What you added, description, comments" ```
    
    ``` git push origin <remote_branch_name>:<local_branch_name> ```
    
  - Make a pull request to the staging branch over at github. Assign reviewers
4. After pull request is reviewed:
  - Merge with staging over at github and delete branch

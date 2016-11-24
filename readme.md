## baisc usage

cp `emoji.git.commit.message.txt` to somewhere


```bash
git config --global commit.template  THE_PAHT_TO_THE_FILE
```


## update emoji from <https://github.com/carloscuesta/gitmoji>
```
node index.js  > emoji.git.commit.message.txt
```


## add emoji when Merge

put the `prepare-commit-msg` to your repositories'  `.git/hooks` folder

after merge branch it will insert a  🔀  in the begin of merge message


have fun 🍻

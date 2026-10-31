GoSleepy uses an diffirent type of configurations like ```main.gs.layout``` specificaly made for the DAW, because fyne dosent accept css and yaml is too yanky to use.

# Basics
As you can see every file is named by its name and type:
``` name.gs.type ```

Currently there are afew types like: <br>
 .layout <- layout of how ui is placed. <br>
 .style <- something like css which sets colors ,fonts ,ect. <br>
 .setup <- every configs starting point with registers and stuff like that <br>

To begin your configuration make **main.gs.setup** in the root directory of you configuration and add code like: <br> 
```
main {
    register {
        "layout/toolbar.gs.layout" 
    }
}
``` 
<br>
from there you can add your layout paths, make sure that they are added from root directory of your configuration like / + layout/toolbar.gs.layout .
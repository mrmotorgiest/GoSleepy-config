GoSleepy uses an diffirent type of configurations like ```main.gs.layout``` specificaly made for the DAW, because fyne dosent accept css and yaml is too yanky to use.

# Basics
As you can see every file is named by its name and type:
``` name.gs.type ```

Every type is treated as an package.

To begin your configuration make **main.gs.setup** in the root directory of you configuration and add code like: <br> 
```
main {
    register {
        "layout/toolbar.gs.layout" 
    }
}
``` 
<br>
from there you can add your layout paths, make sure that they are added from root directory of your configuration like / + layout/main.gs.layout .
<br>


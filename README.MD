GoSleepy uses ```.gs``` configurations based off mostly yaml and css.

# Basics
Most files is structured like ``` name.gs.package ```. Every file is part of an package.

To begin your configuration make **main.gs** in the root directory of you configuration and add code like: <br> 
```
$include {
    "layout/*"
}

.setup {
    resolution: 1920x1080
    title: "GoSleepy"
    tiling: windowed

    items<item , priority> {
        
    }
}
``` 
<br>
From the main file you can add other files or change basic stuff like resolution.
<br>

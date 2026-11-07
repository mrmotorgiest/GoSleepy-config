// the "$" is so when unmarshalling will automaticly include other files
$include {
    "layout/*"
}

// this will create an main.setup object
.setup {
    resolution: 1920x1080
    title: "GoSleepy"
    tiling: windowed

    // objects with <types> will be converted to map[types]
    items<id , priority> {
        main.layout.toolbar , 1
    }
}

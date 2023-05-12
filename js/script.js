var elements = document.querySelectorAll(".navigation_element");
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
        var active_list = document.querySelectorAll(".active");
        for (var j = 0; j < active_list.length; j++) {
            active_list[0].classList.remove("active")
        };
        this.classList.add('active')
        var el = document.querySelectorAll(".text");
        block = el[0]
        block.classList.add('hide')
        function reload(block) {
            block.replaceWith(block)
            var el = document.querySelectorAll(".text");
            el[0].classList.remove('hide')
        }
        setTimeout(reload, 500, block);
    };
}




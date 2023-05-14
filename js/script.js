var elements = document.querySelectorAll("#we_provide_navigation > .nav_element_wrap > .nav_element");
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {

        if (this.classList.contains('first')) {
            var n = 1;
        } if (this.classList.contains('second')) {
            var n = 2;
        } if (this.classList.contains('third')) {
            var n = 3;
        }



        var active_list = document.querySelectorAll("#we_provide_navigation > .nav_element_wrap > .active");
        for (var j = 0; j < active_list.length; j++) {
            active_list[0].classList.remove("active")
        };
        this.classList.add('active')
        var el = document.querySelectorAll("#we_provide_text");
        block = el[0]
        block.classList.add('hide')

        function reload(block, n) {
            block.replaceWith(block)
            var el = document.querySelectorAll("#we_provide_text");
            el[0].classList.remove('hide')

            var el = document.querySelectorAll(".we_provide_text_element");
            for (var j = 0; j < el.length; j++) {
                el[j].classList.add("dnone")
            };
            el[n - 1].classList.remove("dnone")
        }
        setTimeout(reload, 500, block, n);
    };
}




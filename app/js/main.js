$(function(){

    document.querySelectorAll('.form-search__select').forEach(function (fromSearchSelectWrapper) {

        const selectHeaderButton =  fromSearchSelectWrapper.querySelector('.select__header-button');
        const selectBodyList = fromSearchSelectWrapper.querySelector('.select__body-list');
        const selectItem = selectBodyList.querySelectorAll('.select__item'); 

        selectHeaderButton.addEventListener('click', function(){
            selectBodyList.classList.toggle('select__body-list-visible');
            this.classList.add('select__header-button-active')
        });

        selectItem.forEach(function(listItem){
            listItem.addEventListener('click', function(e){
                e.stopPropagation();
                selectHeaderButton.innerText = this.innerText;
                selectHeaderButton.focus();
                selectBodyList.classList.remove('select__body-list-visible');
            });
        });

        document.addEventListener('click', function(e){
            if (e.target !== selectHeaderButton) {
                selectBodyList.classList.remove('select__body-list-visible');
                selectHeaderButton.classList.remove('select__header-button-active');
            }
        });

        document.addEventListener('keydown', function(e){
            if (e.key === 'Tab' || e.key === 'Escape') {
                selectBodyList.classList.remove('select__body-list-visible');
                selectHeaderButton.classList.remove('select__header-button-active');
            }
        });

    });

    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for ( var i = 0; i < this.length; i++ ) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    };

    


});
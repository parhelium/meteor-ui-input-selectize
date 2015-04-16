var logger = loggerFactory('component_selectize')

Template.Selectize.rendered = function(){
    var vars = this.view.parentView.dataVar.curValue;
    this.autorun(function(){
        logger.log( 'Selectize.autorun -> ', vars );
        self.$('.list').selectize(vars.options);
        self.$('input').click();
    })
}

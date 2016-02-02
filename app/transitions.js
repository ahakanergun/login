export default function(){
  this.transition(
    this.fromRoute('user.new'),
    this.toRoute('users'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}

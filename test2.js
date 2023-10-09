function spaceMySentences(sentences) {
    var result = "";
    for (var i = 0; i < sentences.length; i++) {
        result += sentences[i] + ' ';
    }

    return result.trim();
}

var mySentence =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu purus non mi consectetur molestie. Aliquam at placerat lacus, nec malesuada felis. Donec ut felis eleifend, venenatis nibh eu, lacinia est. Duis pharetra enim id ipsum porttitor vestibulum. Pellentesque facilisis, quam at porttitor egestas, nulla risus pulvinar elit, eget tempus purus libero nec tellus. Cras in luctus dolor, ultrices euismod libero. Pellentesque dictum eros sit amet accumsan tincidunt. Proin elementum leo leo, et tincidunt diam euismod nec. Proin malesuada porta condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec scelerisque ultrices magna. Proin nisl leo, sodales eget dignissim vel, lobortis vitae velit.";

if (
	spaceMySentences(mySentence) ===
	"L o r e m i p s u m d o l o r s i t a m e t , c o n s e c t e t u r a d i p i s c i n g e l i t . M a e c e n a s e u p u r u s n o n m i c o n s e c t e t u r m o l e s t i e . A l i q u a m a t p l a c e r a t l a c u s , n e c m a l e s u a d a f e l i s . D o n e c u t f e l i s e l e i f e n d , v e n e n a t i s n i b h e u , l a c i n i a e s t . D u i s p h a r e t r a e n i m i d i p s u m p o r t t i t o r v e s t i b u l u m . P e l l e n t e s q u e f a c i l i s i s , q u a m a t p o r t t i t o r e g e s t a s , n u l l a r i s u s p u l v i n a r e l i t , e g e t t e m p u s p u r u s l i b e r o n e c t e l l u s . C r a s i n l u c t u s d o l o r , u l t r i c e s e u i s m o d l i b e r o . P e l l e n t e s q u e d i c t u m e r o s s i t a m e t a c c u m s a n t i n c i d u n t . P r o i n e l e m e n t u m l e o l e o , e t t i n c i d u n t d i a m e u i s m o d n e c . P r o i n m a l e s u a d a p o r t a c o n d i m e n t u m . O r c i v a r i u s n a t o q u e p e n a t i b u s e t m a g n i s d i s p a r t u r i e n t m o n t e s , n a s c e t u r r i d i c u l u s m u s . D o n e c s c e l e r i s q u e u l t r i c e s m a g n a . P r o i n n i s l l e o , s o d a l e s e g e t d i g n i s s i m v e l , l o b o r t i s v i t a e v e l i t ."
) {
	console.log("Ok");
} else {
	console.log("nope");
}


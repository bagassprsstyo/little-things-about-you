
const photos = [
{"src": "/images/IMG-20261124-WA0012.jpg", "alt": "Memory 1"},
{"src": "/images/IMG-20261124-WA0014.jpg", "alt": "Memory 2"},
{"src": "/images/IMG-20261124-WA0013.jpg", "alt": "Memory 3"}
];

export default function Memories() {
  return (
    <main style={{minHeight:'100vh',padding:30,textAlign:'center',
      background:'linear-gradient(145deg,#dff3ff,#fff,#d5eaff)',
      color:'#315779'}}>
      <h1>Little Things About You ♡</h1>
      <p>Three little moments, forever remembered.</p>
      <section style={{display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',
        gap:24,maxWidth:1000,margin:'35px auto'}}>
        {photos.map((photo,i)=><article key={photo.src}
          style={{padding:12,borderRadius:20,background:'white'}}>
          <img src={photo.src} alt={photo.alt}
            style={{width:'100%',height:310,objectFit:'cover',
            borderRadius:14}}/>
          <p>Memory {i+1} ♡</p>
        </article>)}
      </section>
    </main>
  );
}

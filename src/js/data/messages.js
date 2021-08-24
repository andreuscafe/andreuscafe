const dummyMessages = String.raw`[{"text":"Buenas","fromUser":false,"hour":"4:14 AM"},{"text":"Este celular en realidad era un codepen","fromUser":false,"hour":"4:14 AM"},{"text":"Pero la idea me gustó bastante","fromUser":false,"hour":"4:14 AM"},{"text":"Así que pensé \"che algo hay que hacer con esto\"","fromUser":false,"hour":"4:15 AM"},{"text":"En realidad ideas tuve un montón con esto, pero siento que todas apuntan a nichos super particulares y nada, decidí no ir por ninguna al final.","fromUser":false,"hour":"4:15 AM"},{"text":"Al menos por ahora, calculo...","fromUser":false,"hour":"4:16 AM"},{"text":"Así que voy a intentar usar este celu como un pequeño showcase. Este es el celu de @andreuscafe. Para probar boludeces y tal.","fromUser":false,"hour":"4:17 AM"},{"text":"Sería interesante ver qué cosas se pueden visualizar así. O qué \"apps\" puedo hacer para este celular virtual.","fromUser":false,"hour":"4:17 AM"},{"text":"En todo caso, iré explorando.","fromUser":false,"hour":"4:18 AM"},{"text":"Mientras tanto, este va a ser el formato en el que les voy a compartir las boludeces que voy pensando. Como un blog chat.","fromUser":false,"hour":"4:18 AM"},{"text":"Por ahí pienso que lo que está detrás de una aplicación funcionando es la magia con la que uno decide dotar a su obra.","fromUser":false,"hour":"4:21 AM"},{"text":"Y esta mierda tiene mucha magia potencial.","fromUser":false,"hour":"4:21 AM"},{"text":"Así que nada, por lo pronto voy a dejar esto por acá, en mi propio dominio.","fromUser":false,"hour":"4:22 AM"},{"text":"¿Sabes que sería genial? Que esto se conecte con Telegram, así los mensajes que envies vos desde acá me lleguen vía un bot.","fromUser":false,"hour":"4:22 AM"},{"text":"Voy a hacer eso.","fromUser":false,"hour":"4:23 AM"},{"text":"Btw, uso mucho Twitter. Mi handle está ahí arriba.","fromUser":false,"hour":"4:24 AM"},{"text":"Hasta que haga lo del bot, si necesitas que te responda, me podes mandar un DM por ahí.","fromUser":false,"hour":"4:25 AM"},{"text":"Sino escribile a este chat, que todavía no tiene integración así que nunca voy a leer lo que escribas.","fromUser":false,"hour":"4:25 AM"},{"text":"Y va a ser lo mismo que hablarle a la nada misma.","fromUser":false,"hour":"4:25 AM"},{"text":"Bueno nada. Me voy a pensar lo del bot. Nos vemos.","fromUser":false,"hour":"4:26 AM"},{"text":"Igual son casi las 4:30am. Voy a dormir en realidad.","fromUser":false,"hour":"4:26 AM"},{"text":"*No se dormía*","fromUser":false,"hour":"4:27 AM"},{"text":"¿Será una constante que les devs tengan insomnio?","fromUser":false,"hour":"4:28 AM"},{"text":"Chau.","fromUser":false,"hour":"4:28 AM"},{"text":"Ahora si, posta.","fromUser":false,"hour":"4:28 AM"},{"text":"Hablas un montón flaco sos insoportable.","fromUser":true,"hour":"4:28 AM"},{"text":"¿Eh? ¿Vos mandaste eso?","fromUser":false,"hour":"4:28 AM"},{"text":"La integración no está hecha igual. Es una mentira. Lo mandé yo pero manteniendo apretado shift. Pasa que como lo codee yo puedo hacer lo que se me cante el orto. Como hacerme pasar por vos.","fromUser":false,"hour":"4:29 AM"},{"text":"¿Ves? Soy poderosísimo.","fromUser":true,"hour":"4:30 AM"},{"text":"Puedo decirme cualquier cosa desde tu lugar.","fromUser":true,"hour":"4:30 AM"},{"text":"Me encanta tu código, tus proyectos son hermosos.","fromUser":true,"hour":"4:30 AM"},{"text":"Gracias, ya sabía igual.","fromUser":false,"hour":"4:31 AM"},{"text":"Por favor, codeá más boludeces.","fromUser":true,"hour":"4:31 AM"},{"text":"Obvio, en eso estoy.","fromUser":false,"hour":"4:31 AM"},{"text":"Pero tengo que dormir...","fromUser":false,"hour":"4:31 AM"},{"text":"No, no duermas, codeá.","fromUser":true,"hour":"4:31 AM"},{"text":"Basta dejame dormir.","fromUser":false,"hour":"4:31 AM"},{"text":"Sos un idiota.","fromUser":true,"hour":"4:32 AM"},{"text":"Hasta mañana.","fromUser":false,"hour":"4:32 AM"}]`;
const dummyMessages2 = String.raw`[{"text":"Estuve pensando...","fromUser":true,"hour":"3:20 AM"},{"text":"¿En qué?","fromUser":false,"hour":"3:20 AM"},{"text":"En Internet, no sé...","fromUser":true,"hour":"3:21 AM"},{"text":"No sé muy bien cómo llevarlo a palabras","fromUser":true,"hour":"3:23 AM"},{"text":"Siento que hay una libertad tremenda y un abanico infinito de cosas para hacer","fromUser":true,"hour":"3:23 AM"},{"text":"No entiendo bien por qué pero me emociona un montón","fromUser":true,"hour":"3:23 AM"},{"text":"Pensar que tengo la posibilidad de aprender sobre lo que quiera, en cualquier momento","fromUser":true,"hour":"3:24 AM"},{"text":"Siento que tengo todo lo que podría querer al alcance de una búsqueda","fromUser":true,"hour":"3:24 AM"},{"text":"Creo que sí, lo tenes","fromUser":false,"hour":"3:24 AM"},{"text":"¿Aprendes cosas nuevas muy seguido?","fromUser":false,"hour":"3:25 AM"},{"text":"No sé si tan seguido como me gustaría","fromUser":true,"hour":"3:25 AM"},{"text":"Igual eso es algo que me hace pensar también","fromUser":true,"hour":"3:25 AM"},{"text":"Porque podría decir que aprendo cosas nuevas todo el tiempo, en internet","fromUser":true,"hour":"3:25 AM"},{"text":"Pero a la vez, siento que no aprendo nada","fromUser":true,"hour":"3:25 AM"},{"text":"Es muy ambiguo en mi cabeza...","fromUser":true,"hour":"3:25 AM"},{"text":"Creo que ando buscando que lo que aprendo sea algo enorme, útil e inmediatamente aplicable para considerar que aprendí algo","fromUser":true,"hour":"3:26 AM"},{"text":"Pero no toda la información que hay por ahí cumple esas características...","fromUser":false,"hour":"3:27 AM"},{"text":"Y no creo que sea menos útil por eso","fromUser":false,"hour":"3:27 AM"},{"text":"Cada pequeña cosa, por más boluda que parezca, siento que puede (y creo que ya lo hace) ayudarte a construir o conectar algo más grande","fromUser":false,"hour":"3:27 AM"},{"text":"Eso es un poco lo que pienso para consolarme, ponele","fromUser":true,"hour":"3:28 AM"},{"text":"Pero me acuerdo de cuando era más pendejo, la manija que tenía...","fromUser":true,"hour":"3:28 AM"},{"text":"Aprendía un montón de cosas en muy poco tiempo","fromUser":true,"hour":"3:28 AM"},{"text":"El otro día charlaba con Mar, y reflexionaba sobre esto mismo...","fromUser":true,"hour":"3:28 AM"},{"text":"Le decía que es entendible que al comienzo de aprender sobre algo, ese algo parezca vasto y el progreso por ende esté mucho más a la vista que cuando ya tenés un rato largo en la materia en cuestión...","fromUser":true,"hour":"3:29 AM"},{"text":"Es muy copado profundizar algo que ya sabes para saber mucho de ese algo","fromUser":true,"hour":"3:30 AM"},{"text":"Pero mierda que es aburridísimo comparado con empezar a aprender algo desde cero","fromUser":true,"hour":"3:31 AM"},{"text":"Por ahí tu problema es que buscas la emoción del conocimiento nuevo en cosas que ya conoces bastante bien...","fromUser":false,"hour":"3:31 AM"},{"text":"Con lo cual te pregunto, ¿sos boludo?","fromUser":false,"hour":"3:31 AM"},{"text":"¿Por qué seguís buscando esa emoción en el código, si ya está claro que no vas a volver a sentirlo como a los 12, 13 años?","fromUser":false,"hour":"3:32 AM"},{"text":"Y no sé...","fromUser":true,"hour":"3:32 AM"},{"text":"Por ahí algo de miedo a cambiar radicalmente","fromUser":true,"hour":"3:33 AM"},{"text":"Lo peor es que las cosas que sé que me interesan, un poco van de la mano también con lo que ya hago...","fromUser":true,"hour":"3:33 AM"},{"text":"Diseño, UX, etc...","fromUser":true,"hour":"3:33 AM"},{"text":"Me resulta tan fácil hoy relacionar casi todo con el código que aún si intento mirar por otros lados que me parecen lejanos, sigo viendo sólo puentes para volver acá...","fromUser":true,"hour":"3:34 AM"},{"text":"Un monotemático del orto, soy.","fromUser":true,"hour":"3:34 AM"},{"text":"Creo que tu drama es que hay seguridad en lo que conoces...","fromUser":false,"hour":"3:35 AM"},{"text":"Sabes que en este mambo tenes asegurado laburo, comodidad, estás dentro de todo bien \"rankeado\", y despegarse de eso debe ser complicadísimo","fromUser":false,"hour":"3:35 AM"},{"text":"Y te lo digo yo que soy vos","fromUser":false,"hour":"3:35 AM"},{"text":"No me parece algo simple","fromUser":false,"hour":"3:36 AM"},{"text":"Me parece que tu ventaja es que seguís siendo pendejo y dentro de todo podes seguir estirando el cerebro y metiendo cambios radicales, o quiero creer eso","fromUser":false,"hour":"3:37 AM"},{"text":"Pero, lo que sí me parece clave, es que no te apures a intentar flashar multitasking porque ya sabemos que no te va bien con eso...","fromUser":false,"hour":"3:38 AM"},{"text":"Tomá breaks, no te dividas en dos","fromUser":false,"hour":"3:38 AM"},{"text":"Dejá completamente una cosa y dedicate completamente a otra","fromUser":false,"hour":"3:38 AM"},{"text":"Creo que en este momento tenes la posibilidad de hacerlo...","fromUser":false,"hour":"3:39 AM"},{"text":"Internet está ahí, y cualquier cosa que quieras aprender está a una googleada de distancia, me parece.","fromUser":false,"hour":"3:39 AM"},{"text":"Vos mismo lo decías","fromUser":false,"hour":"3:39 AM"},{"text":"Sí...","fromUser":true,"hour":"3:39 AM"},{"text":"¿Aprovecho ahora, entonces?","fromUser":true,"hour":"3:39 AM"},{"text":"¿Y luego? ¿Vuelvo a finales de julio a buscar retomar?","fromUser":true,"hour":"3:40 AM"},{"text":"Y estamos hablando de un mes, aprox...","fromUser":false,"hour":"3:40 AM"},{"text":"Me parece viable.","fromUser":false,"hour":"3:40 AM"},{"text":"Bueno. Hagamos así entonces.","fromUser":true,"hour":"3:41 AM"},{"text":"Bueno. Suerte, entonces.","fromUser":false,"hour":"3:41 AM"},{"text":"Gracias por estar siempre.","fromUser":true,"hour":"3:52 AM"},{"text":"Medio que no te queda otra...","fromUser":false,"hour":"3:55 AM"}]`;

export default dummyMessages;

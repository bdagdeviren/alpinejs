import Alpine from 'alpinejs'
import axios from "axios";
//CSS
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
//Font
import '@fontsource/roboto';

Alpine.store('app', {
    name: 'Artifact Packer',
    current: 'first',
    items: ['first', 'second', 'third'],
});

Alpine.data('functodo', () => ({
    newTodo: '',
    addTodo() {

        if (!this.newTodo) {
            return
        }

        this.$store.app.items.push(
            this.newTodo,
        )

        this.newTodo = ''
    }
}))

async function startSearch(searchTerm) {
    await axios.get("https://search.maven.org/solrsearch/select?rows=100&q=" + searchTerm)
        .then(resp => console.log(resp));
}

window.Alpine = Alpine
Alpine.start();
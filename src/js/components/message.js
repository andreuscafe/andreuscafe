export default {
    props: ["hour", "text"],
    template: `
        <div class="message">
            <span class="messageText" v-bind:data-date="hour">
                {{ text }}
            </span>
        </div>
    `,
};

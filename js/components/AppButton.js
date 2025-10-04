export default {
    template: `
        <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded disabled:cursor-not-allowed" :disabled="processing">
            <slot />
        </button>
    `,

    data() {
        return {
            processing: true
        };
    }
}
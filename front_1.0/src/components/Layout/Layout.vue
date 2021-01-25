<template functional>
    <section class="layout">
        <section class="layout__navigation-section">
            <slot name="navigation-section" />
        </section>

        <section class="layout__main-section">
            <slot name="main-section" />
        </section>

        <section class="layout__modal-section">
            <slot name="modal-section" />
        </section>
    </section>
</template>

<template>
  <div class="home_main">
    <top-notice />
    <novel-module :titleImg="headerTitle" :links="headerLinks">
      <template #left>
        <header-module />
      </template>
    </novel-module>
    <editor-pick :data="editorBest" />
    <rank-books />
    <novel-module
      class="mt20"
      :titleImg="lNovelData.titleImg"
      :links="lNovelData.links"
      :books="lNovelData.books"
    />
    <novel-module
      class="mt20"
      :titleImg="gNovelData.titleImg"
      :links="gNovelData.links"
      :books="gNovelData.books"
    />
  </div>
</template>

<script lang="ts" setup>
import type { INovelData, ILink, IBook } from './type'
import TopNotice from './HomeCnps/Main/TopNotice.vue'
import NovelModule from './HomeCnps/Main/NovelModule.vue'
import HeaderModule from './HomeCnps/Main/HeaderModule.vue'
import EditorPick from './HomeCnps/Main/EditorPick.vue'
import RankBooks from './HomeCnps/Main/RankBooks.vue'

const headerTitle = 'http://faloo.com/images/manhua.png'
const headerLinks: ILink[] = [
  {
    link: '',
    name: '玄幻频道'
  },
  {
    link: '',
    name: '武侠频道'
  },
  {
    link: '',
    name: '都市频道'
  }
]
const editorBest: IBook[] = [
  {
    image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
    name: '大唐：从寇仲开始崛起诸天！'
  },
  {
    image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
    name: '大唐：从寇仲开始崛起诸天！'
  },
  {
    image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
    name: '大唐：从寇仲开始崛起诸天！'
  },
  {
    image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
    name: '大唐：从寇仲开始崛起诸天！'
  },
  {
    image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
    name: '大唐：从寇仲开始崛起诸天！'
  },
  {
    image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
    name: '大唐：从寇仲开始崛起诸天！'
  },
  {
    image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
    name: '大唐：从寇仲开始崛起诸天！'
  },
  {
    image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
    name: '大唐：从寇仲开始崛起诸天！'
  }
]
const gNovelData: INovelData = {
  titleImg: 'http://faloo.com/images/nvshengxiaoshuo.png',
  books: [
    {
      image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
      name: '大唐：从寇仲开始崛起诸天！'
    },
    {
      image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
      name: '大唐：从寇仲开始崛起诸天！'
    },
    {
      image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
      name: '大唐：从寇仲开始崛起诸天！'
    },
    {
      image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
      name: '大唐：从寇仲开始崛起诸天！'
    },
    {
      image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
      name: '大唐：从寇仲开始崛起诸天！'
    },
    {
      image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
      name: '大唐：从寇仲开始崛起诸天！'
    }
  ],
  links: [
    {
      link: '',
      name: '玄幻频道'
    },
    {
      link: '',
      name: '武侠频道'
    },
    {
      link: '',
      name: '都市频道'
    }
  ]
}
const lNovelData: INovelData = {
  titleImg: 'http://faloo.com/images/nanshengxiaoshuo.png',
  books: [
    {
      image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
      name: '大唐：从寇仲开始崛起诸天！'
    },
    {
      image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
      name: '大唐：从寇仲开始崛起诸天！'
    },
    {
      image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
      name: '大唐：从寇仲开始崛起诸天！'
    },
    {
      image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
      name: '大唐：从寇仲开始崛起诸天！'
    },
    {
      image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
      name: '大唐：从寇仲开始崛起诸天！'
    },
    {
      image: 'http://img4ts.faloo.com/Listen/166x235/0/0/000000752.jpg',
      name: '大唐：从寇仲开始崛起诸天！'
    }
  ],
  links: [
    {
      link: '',
      name: '玄幻频道'
    },
    {
      link: '',
      name: '武侠频道'
    },
    {
      link: '',
      name: '都市频道'
    }
  ]
}
</script>

<style lang="less" scoped>
.home_main {
  width: 100%;
}
.mt20 {
  margin-top: 20px;
}
</style>
